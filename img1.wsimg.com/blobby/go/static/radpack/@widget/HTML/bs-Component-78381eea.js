define("@widget/HTML/bs-Component-78381eea.js", ["exports"], (function(e) {
    "use strict";
    var t = {
        postMessageScript: "<script>window.onmessage = function(event) {event.source.postMessage({iframeId: event.data, scrollHeight: document.body.getBoundingClientRect().height || document.body.scrollHeight}, event.origin);};<\/script>",
        centerOpenTag: '<div style="display: flex; justify-content: center">'
    };
    class i extends(global.React || guac.react).Component {
        static get propTypes() {
            return {
                centerContent: (global.PropTypes || guac["prop-types"]).bool,
                htmlSrc: (global.PropTypes || guac["prop-types"]).string,
                iframeHeight: (global.PropTypes || guac["prop-types"]).string,
                order: (global.PropTypes || guac["prop-types"]).number
            }
        }
        constructor() {
            super(...arguments), this.iframe = (global.React || guac.react).createRef(), this.isEdge = "undefined" != typeof window && /Edge/.test(window.navigator.userAgent)
        }
        componentDidMount() {
            this.isIE = !!document.documentMode, window.addEventListener("message", this.setHeight.bind(this)), this.autoAdjustHeight(this.props.iframeHeight)
        }
        componentWillUnmount() {
            window.removeEventListener("message", this.setHeight), clearTimeout(this.autoAdjustId)
        }
        componentWillReceiveProps(e) {
            clearTimeout(this.autoAdjustId), this.autoAdjustHeight(e.iframeHeight)
        }
        autoAdjustHeight(e) {
            if (!this.shouldAutoUpdate(e)) return;
            const t = this.iframe.current;
            t && t.contentWindow && t.contentWindow.postMessage && t.contentWindow.postMessage(t.getAttribute("id"), "*"), this.isIE || (this.autoAdjustId = setTimeout(this.autoAdjustHeight.bind(this), 500))
        }
        setHeight(e) {
            if (e.data.scrollHeight && e.data.iframeId) {
                const t = e.data.scrollHeight + "px",
                    i = document.getElementById(e.data.iframeId);
                i && i.style.height !== t && (i.style.height = t)
            }
        }
        shouldAutoUpdate(e) {
            return "" === e || !Number(e)
        }
        render() {
            const {
                centerContent: e,
                iframeHeight: i,
                htmlSrc: o,
                order: s
            } = this.props, n = o.replace(/\$script/g, "/script"), r = e ? `${t.postMessageScript}<body style='margin: 0;'>${t.centerOpenTag}${n}</div></body>` : `${t.postMessageScript}<body style='margin: 0'>${n}</body>`, a = {
                width: "100%",
                height: i + "px",
                overflow: "visible",
                transition: "height 1.5s ease",
                WebkitTransition: "height 1.5s ease",
                MozTransition: "height .25s ease"
            }, d = this.isEdge ? function(e, t) {
                const i = new Blob([e], {
                    type: t
                });
                return URL.createObjectURL(i)
            }(r, "text/html") : 'javascript: window.frameElement.getAttribute("srcdoc");';
            return (global.React || guac.react).createElement("iframe", {
                id: (global._ || guac.lodash).uniqueId("iframe-" + s),
                frameBorder: "0",
                ref: this.iframe,
                sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-presentation allow-top-navigation",
                src: d,
                srcDoc: r,
                style: a
            })
        }
    }
    e.default = i
})), "undefined" != typeof window && (window.global = window);