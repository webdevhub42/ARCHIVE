1.  Describe how to create an "engine" that you will use to connect to a PostgreSQL database instance

    ```python
    engine = create_engine("postgresql://sqlalchemy_test:password@localhost/sqlalchemy_test")
    ```

    -MORE IMPORTANTLY, how do we get the URL?

    ```python
    f'postgresql://{user_name}:{user_password}@{host_name}/{database_name}'
    ```

2.  Describe how the with engine.connect() as connection: block establishes and cleans up a connection to the database

    ```python
    with engine.connect() as connection:
        result = connection.execute("""
            SELECT o.first_name, o.last_name, p.name
            FROM owners o
            JOIN ponies p ON (o.id = p.owner_id)
        """)
        for row in result:
            print(row["first_name"], row["last_name"], "owns", row["name"])

    engine.dispose()
    ```

3.  Describe how to create a database session from an engine

    ```python
    SessionFactory = sessionmaker(bind=engine)

    session = SessionFactory()
    ```

4.  Create a mapping for SQLAlchemy to use to tie together a class and a table in the database

    ```python
    #models.py
    from flask_sqlalchemy import SQLAlchemy

    db = SQLAlchemy()

    class Employee(db.Model, UserMixin):
        pass
    ```

5.  Add data to the database, both single entities as well as related data

    ```python
    @bp.route("/finalization/<int:id>", methods=["POST"])
    @login_required
    def open(id):
        order = Order(
            employee_id=form.employees.data,
            table_id=form.tables.data,
            finished=False
        )
        db.session.add(order)
        db.session.commit()
    ```

    ```python
    #database.py - make sure to run this while in the venv
    from dotenv import load_dotenv
    load_dotenv()


    from app import app, db
    from app.models import Employee, Menu, MenuItem, MenuItemType, Table


    with app.app_context():
        db.drop_all()
        db.create_all()

        user = Employee(name="Margot", employee_number=1234, password="password")

        beverages = MenuItemType(name="Beverages")
        entrees = MenuItemType(name="Entrees")
        sides = MenuItemType(name="Sides")

        dinner = Menu(name="Dinner")

        fries = MenuItem(name="French fries", price=3.50, type=sides, menu=dinner)
        drp = MenuItem(name="Dr. Pepper", price=1.0, type=beverages, menu=dinner)
        tea = MenuItem(name="Lingonberry Tea", price=1.0, type=beverages, menu=dinner)
        jambalaya = MenuItem(name="Jambalaya", price=21.98, type=entrees, menu=dinner)
        parm = MenuItem(name="Eggplant Parmesan", price=21.98, type=entrees, menu=dinner)

        for index in range(1, 11):
            db.session.add(Table(capacity=index, number=index))

        db.session.add(dinner)
        db.session.add(user)
        db.session.commit()
    ```

6.  Update data in the database

    ```python
    @bp.route("/finalization/<int:id>", methods=["POST"])
    @login_required
    def close(id):
        order = Order.query.get(id)
        order.finished = True
        db.session.commit()

    ```

7.  Delete data from the database (including cascades!)

    ```python
    @bp.route("/finalization/<int:id>", methods=["POST"])
    @login_required
    def close(id):
        order = Order.query.get(id)
        db.session.delete(order)
        db.session.commit()
        return redirect(url_for('.index'))
    ```

    ```python
    class Order(db.Model):
        __tablename__ = "orders"

        id = db.Column(db.Integer, primary_key=True)
        employee_id = db.Column(db.Integer,
                                db.ForeignKey("employees.id"),
                                nullable=False)
        table_id = db.Column(db.Integer,
                            db.ForeignKey("tables.id"),
                            nullable=False)
        finished = db.Column(db.Boolean, nullable=False)

        employee = db.relationship("Employee", back_populates="orders", cascade="all, delete-orphan")
        table = db.relationship("Table", back_populates="orders", cascade="all, delete-orphan")
        details = db.relationship("OrderDetail", back_populates="order",cascade="all, delete-orphan")

        # other options (save-update, merge, all, delete-orphan)
    ```

    save-update: Indicates that when an object is added to a Session, all of the objects with it via attributes defined by the relationship function should also be added to the same Session. This is the magic that allowed you to only add you to the Session and your_pony went along for the ride when they were saved. (Updating works similarly, as in its magically handled.)

    merge: Magically merges changes to all instances that have the same type and id values.

    all: This is a synonym for a lot of settings, "save-update, merge, refresh-expire, expunge, delete". Please refer to the documentation for all of their meanings. The link is at the end of this section.

8.  Know how to use and specify the "delete-orphan" cascading strategy

    delete-orphan: This means that, if a record would become an "orphan" when its associated object is deleted, then SQLAlchemy should delete that object, too. In the case of you and your_pony, when you attempt to delete you, then SQLAlchemy sees that your_pony would become an orphan (have no associated owner record), and deletes it, too.

9.  Describe the purpose of a Query object

    Does NOT immediately executing SQL against the database, use to have SQL executed against the database

    Use a session object to query the database using a model

    ```python
    owner_query = session.query(Owner.first_name, Owner.last_name)
    print(owner_query)

    """
    SELECT owners.first_name AS owners_first_name,
        owners.last_name AS owners_last_name
    FROM owners
    """
    ```

10. How to order your results

    ```python
    owner_query = session.query(Owner.first_name, Owner.last_name)
                        .order_by(Owner.last_name)
    print(owner_query)

    """
    SELECT owners.first_name AS owners_first_name,
        owners.last_name AS owners_last_name
    FROM owners
    ORDER BY owners.last_name
    """
    ```

11. Use the filter method to find just what you want

    ```python
    pony_query = session.query(Pony)
                        .filter(Pony.name.ilike("%u%"))
                        .filter(Pony.birth_year < 2015)

    ```

12. Use instance methods on the Query object to return a list or single item

    ```python
    ponies = pony_query.all()
    for pony in ponies:
        print(pony.name)

    #examples .all(), .first(), one(), one_or_none(), more in docs
    ```

13. Use the count method to ...count

    ```python
    pony_query = session.query(Pony)

    print(pony_query.count())
    ```

14. Query objects with criteria on dependant objects

    ```python
    hirzai_owners = session.query(Owner) \
                        .join(Pony)  \
                        .filter(Pony.breed == "Hirzai")
    ```

15. Lazily load objects

    ```python
    owners = session.query(Owner)
    for owner in owners:
        print(owner.first_name, owner.last_name)
        for pony in owner.ponies:
            print("\t", pony.name)

    ```

16. Eagerly load objects

    ```python
    owners_and_ponies = session.query(Owner).options(joinedload(Owner.ponies))

    for owner in owners_and_ponies:
        print(owner.first_name, owner.last_name)
        for pony in owner.ponies:
            print("\t", pony.name)
    ```

17. Install the Flask-SQLAlchemy extension to use with Flask

    ```python
    pipenv install flask-sqlalchemy
    ```

    What if I don't specify the python version?

    -Configure SQLAlchemy using Flask-SQLAlchemy

    ```python
    #models.py
    from flask_sqlalchemy import SQLAlchemy

    db = SQLAlchemy()

    #.env
    DATABASE_URL=postgresql://order_up:password@localhost/order_up_dev

    #app/__init__.py
    from flask import Flask
    from .models import db

    app = Flask(__name__)

    app.config.from_object(Configuration)

    db.init_app(app)
    ```

18. Use the convenience functions and objects Flask-SQLAlchemy provides you to use in your code.

    No need for declarative mapping can inherit from db.Model

    ```python
    class FeeLineItem(db.Model):
        pass
    ```

    No need for creating engine, can configure engine settings in the env

    ```python
    #same code as above
    #models.py
    from flask_sqlalchemy import SQLAlchemy

    db = SQLAlchemy()

    #.env
    DATABASE_URL=postgresql://order_up:password@localhost/order_up_dev

    #app/__init__.py
    from flask import Flask
    from .models import db

    app = Flask(__name__)

    app.config.from_object(Configuration)

    db.init_app(app)
    ```

    ```python
    from flask_sqlalchemy import SQLAlchemy

    db = SQLAlchemy(app)
    ```

    can query directly off of model that inherits from db.Model

    ```python
    pony = Pony.query.get(id)
    ```

    no need to create a session with sessionmaker()

    ```python
    @bp.route("/finalization/<int:id>", methods=["POST"])
    @login_required
    def close(id):
        order = Order.query.get(id)
        db.session.delete(order)
        db.session.commit()
        return redirect(url_for('.index'))
    ```
