## find K greatest in array
### Kth Multiple (p. 187)
Design an algorithm to find the kth number such that the only prime factors are 3, 5, and 7. Note that 3, 5, and 7 do not have to be factors, but it should not have any other prime factors. For example, the first several multiples would be (in order) 1, 3, 5, 7, 9, 15, 21.


```ruby
def kth_multiple(k)
  return 0 if k < 0

  val = 0
  queue3 = Queue.new
  queue5 = Queue.new
  queue7 = Queue.new

  #include oth - kth iteration
  (0..k).each do |i|
    v3 = (queue3.length > 0) ? queue3.peek : Integer.MAX_VALUE
    v5 = (queue5.length > 0) ? queue3.peek : Integer.MAX_VALUE
    v7 = (queue7.length > 0) ? queue3.peek : Integer.MAX_VALUE
    val = [v3, v5, v7].min

    if val == v3 #enqueue into 3 5 and 7
      queue3.remove
      queue3.add(3 * val)
      queue5.add(5 * val)
    elsif val == v5 #enqueue into 5 and 7
      queue5.remove
      queue5.add(5 * val)
    elsif val == v7
      queue7.remove
    end
    #always enqueue into Q7
    queue.add(7 * val)
  end
  val
end
```

### Smallest K (p 188)
Design an algorithm to find the smallest K numbers in an array.

## connected components
## shortest path in BFS and DFS
### Smallest Difference (p. 181)
Given two arrays of integers, compute the pair of values (one value in each array) with the smallest (non-negative) difference. Return the difference.

Example:
```
input: [1, 3, 15, 11, 2], [23, 127, 235, 19, 8]
output: 3 (that is, the pair [11, 8])
```

```ruby
def find_smallest_diff(arr1, arr2)
  sorted1 = arr1.slice().sort
  sorted2 = arr2.slice().sort

  a = 0
  b = 0
  best_diff = Integer.MAX_VALUE

  while a < sorted1.length && b < sorted2.length
    num1 = sorted[a]
    num2 = sorted[b]
    diff = Math.abs(num1 - num2)

    best_diff = [best_diff, diff].max
    num1 < num2 ? a += 1 : b += 1
  end

  best_diff
end
```
## string matching & sorting
## graph problems
## heaps
## hard CTCI problems
## pond sizes (p. 184)
You have an integer matrix representing a plot of land, where the value at that location represents the height above sea level. A value of zero indicates water. A pond is a region of water connected vertically, horizontally, or diagonally. The size of the pond is the total number of connected water cells. Write a method to compute the sizes of all ponds in the matrix.

Example:
```
input:
0 2 1 0
0 1 0 1
1 1 0 1
0 1 0 1

output: 2, 4 1 (in any order)
```

```ruby
def pond_sizes(pond)
  sizes = []
  seen = Set.new

  (0...pond.length).each do |row|
    (0...pond[row]).each do |col|
      size = get_size(pond, seen, row, col)
      sizes << size if size > 0
    end
  end

def get_size(pond, seen, row, col)
  if row < 0 || col < 0 || row >= pond.length || col >= pond[row].length || visited.include?(row.to_s + col.to_s) || pond[row][col] != 0
    return 0
  end

  size = 1
  seen.add(row.to_s + col.to_s)
  (-1..1).each do |row_delta|
    (-1..1).each do |col_delta|
      size += get_size(pond, seen, row + row_delta, col + col_delta)
    end
  end

  size
end
```


## baby names (p. 187)
Each year, the government releases a list of the 1000 most common baby names and their frequencies (the number of babies with that name). The only problem with this is that some names have multiple spellings. For example, "John" and "Jon" are essentially the same name but would be listed separately in the list. Given two lists, one of names/frequencies and the other of pairs of equivalent names, write an algorithm to print a new list of the true frequency of each name. Note that if John and Jon are synonyms, Jon and Johnny are synonyms, then John and Johnny are synonyms. (Transitive and symmetric). In the final list, any name can be used at the "real" name.

Example:
```
input:
  Names: John(15), Jon(12), Chris(13), Kris(4), Christopher(19)
  Synonyms: (Jon, John), (John, Johnny), (Chris, Kris), (Chris, Christopher)

output: John(27), Kris(36)
```

```ruby
def baby_names(names, synonyms)
  #create data
  graph = construct_graph(names)

  #find components
  connect_edges(graph, synonyms)

  get_true_frequencies(graph)
end

#add all names to graph as nodes
def construct_graph(names)
  graph = Graph.new

  names.each do |name_hash|
    name = name_hash.keys
    freq = name_hash.values
    graph.create_node(name, freq)
  end
  graph
end

#connect synonymous spellings
def connect_edges(graph, synonyms)
  synonyms.each do |syn|
    name1 = syn.first
    name2 = syn.last

    graph.add_edge(name1, name2)
  end
end

#Do DFS of each component. If a node has been visited before, then its component has already been computed.
def get_true_frequencies(graph)
  root_names = {}
  graph.get_nodes.each do |node|
    if !node.visited
      frequency = get_component_frequency(node)
      name = node.name
      root_names[name] = frequency
    end
  end

  root_names
end

#do DFS to find total frequency of this component, and mark each node as visited
def get_component_frequency(node)
  return 0 if node.visited
  node.visited = true
  sum = node.frequency

  node.children.each do |child|
    sum += get_component_frequency(child)
  end

  sum  
end
```

## Misc
### productify
Given a list of numbers in an array, replace all the numbers with the product of all other numbers. Do this in O(n) time without using division.

```ruby
def productify(arr)
  # Build two arrays
  # * `left_arr[i]` is the product of all `arr[j]` for `j < i`
  # * `right_arr` is the product of all `arr[j]` for `j > i`
  products = Array.new(arr.length, 1)

  lower_prod = 1
  0.upto(arr.size - 1) do |i|
    products[i] = products[i] * lower_prod
    lower_prod = lower_prod * arr[i]
  end

  upper_prod = 1
  (arr.size - 1).downto(0) do |i|
    products[i] = products[i] * upper_prod
    upper_prod = upper_prod * arr[i]
  end

  products
end
```

### is_balanced?
Write a function to check if a binary tree is balanced. A tree is balanced if, at every node, the depth of subtree on the left hand side is equal to the depth of the subtree on the right (plus or minus one).

```ruby
#Take in the root node
def is_balanced?(node)
  #Base case: the tree is empty.  Return true.
  return true if !node
  #Get the depths of left and right subtrees and compare
  left_depth = get_depth(node.left)
  right_depth = get_depth(node.right)
  depth_diff = Math.abs(left_depth - right_depth)

  #The tree is balanced if both subtrees are balanced AND the difference in depths of those subtrees is between -1 and 1
  return is_balanced?(node.left) && is_balanced?(node.right) && depth_diff < 2
end

def get_depth(node)
  #Base case: the tree is empty.  Return 0.
  return 0 if !node
  #Take the larger depth of the two subtrees, calculated recursively
  [get_depth(node.left), get_depth(node.right)].max + 1
end
```

### next_largest
Given a node in a Binary Search Tree, find the node with the next largest value. Assume you don't have the root of the tree, just a single node from it.

```ruby
# O(log(n)) if BST is balanced
def next_largest(node)
  if node.right
    # find smallest node to the right
    return left_most_node(node.right)
  end

  # no nodes to the right; climb up
  until true
    parent_node = node.parent
    if parent_node.nil?
      # at the top of the tree, and nothing bigger to the right.
      return nil
    elsif parent_node.left == node
      # parent is bigger than us
      return parent_node
    else
      # parent is smaller, keep climbing.
      node = parent_node
    end
  end
end

def left_most_node(node)
  # keep going down and to the left
  node = node.left until node.left.nil?

  node
end
```

### merge meetings
Write a function `condense_meeting_times()` that takes an array of meeting time ranges and returns an array of condensed ranges.

```ruby
def condense_meeting_times(meetings)
    # sort by start times, breaking ties with end times
    sorted_meetings = meetings.sort
    # meetings only go in merged_meetings when we're sure they can't be merged further
    merged_meetings = []
    previous_meeting_start, previous_meeting_end = sorted_meetings[0]

    sorted_meetings[1..-1].each do |current_meeting_start, current_meeting_end|
        # if the previous meeting can be merged with the current one
        # that is, if current meeting starts before previous meeting ends:
        if current_meeting_start <= previous_meeting_end
            # merge the current_meeting back into the previous_meeting
            # and keep the resulting meeting as the previous_meeting
            # because this newly-merged meeting might still
            # need to be merged with the next meeting
            previous_meeting_end = [current_meeting_end, previous_meeting_end].max
        # else the previous meeting can't be merged with anything else
        else
            # put it in merged_meetings
            # and move on to trying to merge the current meeting into subsequent meetings
            merged_meetings.push([previous_meeting_start, previous_meeting_end])
            previous_meeting_start, previous_meeting_end = current_meeting_start, current_meeting_end
        end
    end
    # put last meeting we were trying to merge in our final set
    merged_meetings.push([previous_meeting_start, previous_meeting_end])
    return merged_meetings
end
```

### largest contiguous subsum
Given an array of integers (positive and negative) find the largest contiguous subsum (sum of a subarray). Solve it in O(n) time with O(1) memory.

```ruby
def largest_contiguous_subsum(arr)
    current_sum = 0
    max = arr.first || 0  # return 0 for empty array

    arr.each do |el|
        current_sum += el
        max = [current_sum, max].max
        current_sum = 0 if current_sum < 0
    end

    max
end
```

### permutations
```ruby
def permutations(arr)
  return [[]] if arr.empty?

  perms = []
  arr.length.times do |i|
    el = arr[i]
    rest = arr.take(i) + arr.drop(i + 1)
    new_perms = permutations(rest).map {|perm| perm.unshift(el)}
    perms.concat(new_perms)
  end

  perms
end
```

### rectangular intersection
```ruby
def find_range_overlap(point1, length1, point2, length2)
    # find the highest start point and lowest end point.
    # the highest ("rightmost" or "upmost") start point is
    # the start point of the overlap.
    # the lowest end point is the end point of the overlap.
    highest_start_point = [point1, point2].max
    lowest_end_point = [point1 + length1, point2 + length2].min

    # return nil overlap if there is no overlap
    if highest_start_point >= lowest_end_point
        return [nil, nil]
    end

    # compute the overlap length
    overlap_length = lowest_end_point - highest_start_point
    return [highest_start_point, overlap_length]
end

def find_rectangular_overlap(rect1, rect2)
    # get the x and y overlap points and lengths
    x_overlap_point, overlap_width  = find_range_overlap(rect1['left_x'], rect1['width'],  rect2['left_x'], rect2['width'])

    y_overlap_point, overlap_height = find_range_overlap(rect1['bottom_y'], rect1['height'], rect2['bottom_y'], rect2['height'])

    # return nil rectangle if there is no overlap
    if !overlap_width || !overlap_height
        return {
            'left_x' => nil,
            'bottom_y' => nil,
            'width' => nil,
            'height' => nil,
        }
    end

    return {
        'left_x' => x_overlap_point,
        'bottom_y' => y_overlap_point,
        'width' => overlap_width,
        'height' => overlap_height,
    }
end
```

### find 2nd largest
Write a function to find the 2nd largest element in a binary search tree

```ruby
def find_largest(root_node)
  current = root_node
  while current
      return current.value if !current.right
      current = current.right
  end
end

def find_second_largest(root_node)
  if !root_node.left && !root_node.right
      raise Exception, 'Tree must have at least 2 nodes'
  end

  current = root_node

  while current
      # case: current is largest and has a left subtree
      # 2nd largest is the largest in that subtree
      if current.left && !current.right
          return find_largest(current.left)
      end

      # case: current is parent of largest, and
      # largest has no children, so
      # current is 2nd largest
      if current.right && \
              !current.right.left && \
              !current.right.right
          return current.value
      end

      current = current.right
  end
end
```

### cake thief
Write a function `max_duffel_bag_value()` that takes an array of cake type arrays and a weight capacity, and returns the maximum monetary value the duffel bag can hold.

```ruby
def max_duffel_bag_value(cake_arrays, weight_capacity)

  # we make an array to hold the maximum possible value at every
  # duffel bag weight capacity from 0 to weight_capacity
  # starting each index with value 0
  max_values_at_capacities = [0] * (weight_capacity + 1)

  (0..weight_capacity).each do |current_capacity|

      # set a variable to hold the max monetary value so far for current_capacity
      current_max_value = 0

      cake_arrays.each do |cake_weight, cake_value|

          # if a cake weighs 0 and has a positive value the value of our duffel bag is infinite!
          if (cake_weight == 0 && cake_value != 0)
              return Float::INFINITY
          end

          # if the current cake weighs as much or less than the current weight capacity
          # it's possible taking the cake would give get a better value
          if (cake_weight <= current_capacity)

              # so we check: should we use the cake or not?
              # if we use the cake, the most kilograms we can include in addition to the cake
              # we're adding is the current capacity minus the cake's weight. we find the max
              # value at that integer capacity in our array max_values_at_capacities
              max_value_using_cake = cake_value + max_values_at_capacities[current_capacity - cake_weight]

              # now we see if it's worth taking the cake. how does the
              # value with the cake compare to the current_max_value?
              current_max_value = [max_value_using_cake, current_max_value].max
          end
      end

      # add each capacity's max value to our array so we can use them
      # when calculating all the remaining capacities
      max_values_at_capacities[current_capacity] = current_max_value
  end

  return max_values_at_capacities[weight_capacity]
end
```

### paren matching
```ruby
def properly_nested?(str)

  #use a regex expression to remove all characters except braces, brackets, and parentheses. Not necessary, but I think it makes things easier to understand.
  sym_str = str.gsub(/[^((){}\[\])]/, "")
  return false if sym_str.length.odd?

  sym_hash = { "[": "]", "(": ")", "{": "}" }
  openers = sym_hash.keys
  openers_stack = []

  (0...sym_str.length).each do |i|
    char = sym_str[i]
    if openers.include?(char)
      openers_stack << char
    else
      #must be a closing symbol if we are here. we can return false if theres no corresponding opening symbol, or if the opening symbol does not match the closing symbol
      return false if openers_stack.empty?
      last_opener = openers_stack.pop
      return false unless sym_hash[last_opener] == char
    end
  end

  true
end
```

### build order
You are given a list of projects and a list of dependencies (which is a list of pairs of projects, where the second project is depending on the first project). All of a project's dependencies must be built before the project is. Find a build order that will allow the projects to be built. If there is no valid build order, return an error.

Example:

```
Input:
  projects: a, b, c, d, e, f
  dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)

Output: f, e, a, b, d, c
```
To get the order of the projects we just need to create a graph of the projects and their dependencies and do a topological sort. To detect if an order can be determined we also need to check for cycles as topological sort will only work on DAGs.

N = |projects|
M = |dependencies|
Time: O(N+M) - this assumes that the objects and we use as hashmaps and the Set data type have operations that take O(1) time.
Additional space: O(N)

```ruby
def build_order(projects, dependencies)
  adj = {}
  finished =[]
  discovered = Set.new
  path = Set.new

  #create adjacency matrix
  projects.each do |project|
    adj[project] = []
  end

  dependencies.each do |edge|
    adj[edge[1]] << edge[0]
  end

  #run topological sort
  projects.each do |project|
    topological_sort(adj, discovered, finished, path, project)
  end

  finished.reverse
end

def topological_sort(adj, discovered, finished, path, project)
  return if discovered.include?(project)
  discovered.add(project)
  path.add(project)

  adj[project].each do |neighbor|
    if path.include?(neighbor)
      raise "Error, dependencies are cyclic."
    end

    topological_sort(adj, discovered, finished, path, neighbor)
  end

  path.delete(project)
  finished << project
end
```
### quicksort

```ruby
def quickSort(arr)
    return arr if if arr.length <= 1

    pivot = arr[0]
    left = []
    right = []

    (1...arr.length).each do |i|
      el = arr[i]
      (el <=> pivot == -1) ? left << el : right << el
    end

    quicksort(left) + pivot + quicksort(right)
  end
  ```
### min insertions to form palindrome
```ruby
def min_for_pal(str, left = 0, right = nil)
  right ||= str.length - 1
  return Float::INFINITY if left > right

  return 0 if left == right or (left == right - 1 and str[left] == str[right])
  return 1 if left == right - 1

  if str[left] == str[right]
    min_for_pal(str, left+1, right-1)
  else
    [min_for_pal(str, left + 1, right), min_for_pal(str, left, right - 1)].min + 1
  end
end
```
### dijkstra (overkill, imo, not necessary)
```ruby
class Graph
  Vertex = Struct.new(:name, :neighbours, :dist, :prev)

  def initialize(graph)
    @vertices = Hash.new{|h,k| h[k]=Vertex.new(k,[],Float::INFINITY)}
    @edges = {}

    graph.each do |(v1, v2, dist)|
      @vertices[v1].neighbours << v2
      @vertices[v2].neighbours << v1
      @edges[[v1, v2]] = @edges[[v2, v1]] = dist
    end

    @dijkstra_source = nil
  end

  def dijkstra(source)
    return  if @dijkstra_source == source

    q = @vertices.values
    q.each do |v|
      v.dist = Float::INFINITY
      v.prev = nil
    end

    @vertices[source].dist = 0

    until q.empty?
      u = q.min_by {|vertex| vertex.dist}
      break if u.dist == Float::INFINITY
      q.delete(u)

      u.neighbours.each do |v|
        vv = @vertices[v]

        if q.include?(vv)
          alt = u.dist + @edges[[u.name, v]]

          if alt < vv.dist
            vv.dist = alt
            vv.prev = u.name
          end
        end
      end
    end

    @dijkstra_source = source
  end

  def shortest_path(source, target)
    dijkstra(source)
    path = []
    u = target

    while u
      path.unshift(u)
      u = @vertices[u].prev
    end

    return path, @vertices[target].dist
  end

  def to_s
    "#<%s vertices=%p edges=%p>" % [self.class.name, @vertices.values, @edges]
  end
end
```

## Graphs
* instances - nodes
* relations - edges
* undirected - edges have no directions
* cycle - arrive at node again while traversing graph

DFS - curious strategy, sarch deeper nodes first. Typical graph traversal strategy. Easy recursive implementation.

a **graph** is a group of **nodes** with some **edges** between them (e.g. nodes representing people and edges representing relationships between the people). What makes graph theory special is that we don’t particularly care about the Euclidean geometrical structure of the nodes and edges. In other words, we don’t care about the angles they form. Instead, we care about the *“relationships”* that these edges create.

### The Adjacency Matrix (may be overkill, focus on adj list)
The simplest way to store a graph is probably the **adjacency matrix**.

Let’s say we have a graph with (V) nodes. We represent that graph with a (V x V) matrix full of 1’s and 0’s. If there exists an edge going from node [i] to node [j], then we place a (1) in row (i) and row (j). If there’s no such edge, then we place a (0) in row (i) and row (j). An adjacency list is another way to represent a graph. For each node (i), we setup lists that contain references to the nodes that (i) has an edge to.

```ruby
def depth_first_search(adj_matrix, source_index, end_index)
  node_stack = [source_index]

  loop do
    curr_node = node_stack.pop
    return false if curr_node == nil
    return true if curr_node == end_index

    children = (0..adj_matrix.length-1).to_a.select do |i|
      adj_matrix[curr_node][i] == 1
    end

    node_stack = node_stack + children
  end
end
```

### adjacency list and graph
Here's one way of building a directed graph in Ruby, where each node maintains references to its successors, but nodes can be referenced by name. First we'll need a class for the nodes:

```ruby
class Node
  attr_reader :name

  def initialize(name)
    @name = name
    @successors = []
  end

  def add_edge(successor)
    @successors << successor
  end

  def to_s
    "#{@name} -> [#{@successors.map(&:name).join(' ')}]"
  end
end
```

Each node maintains references to its successors. Not knowing what kind of operations you need, I haven't defined any that actually do graph traversal, but each node having references to its successors makes traversing the graph trivial.

Now we'll create a class to represent the entire graph:

```ruby
class Graph
  def initialize
    @nodes = {}
  end

  def add_node(node)
    @nodes[node.name] = node
  end

  def add_edge(predecessor_name, successor_name)
    @nodes[predecessor_name].add_edge(@nodes[successor_name])
  end

  def [](name)
    @nodes[name]
  end
end
```

This class keeps a hash of its nodes, keyed by name. This makes retrieval of a specific node easy.

Here's an example of a graph containing a cycle:

```ruby
graph = Graph.new
graph.add_node(Node.new(:a))
graph.add_node(Node.new(:b))
graph.add_node(Node.new(:c))
graph.add_edge(:a, :b)
graph.add_edge(:b, :c)
graph.add_edge(:c, :a)
puts graph[:a]    #=> a -> [b]
puts graph[:b]    #=> b -> [c]
puts graph[:c]    #=> c -> [a]
```


## OTHER TOPICS OF INTEREST
(which may or may not have been previously covered)

* medium CTCI problems
* hard CTCI problems
* DFS and BFS in trees and graphs
* traversing all data structures
* do all tree and graph CTCI problems
* linked lists
* Do all problems in Big O section. Know how to calculate Big O in recursive problems
