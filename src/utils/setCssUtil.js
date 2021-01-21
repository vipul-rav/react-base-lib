export default (bankId) => {
    document.getElementById("appStyle").href = bankId === "CB" ? "css/app.cb.css" : "css/app.yb.css";
};
