//埋点数据
export const tj = function reqTJ(code) {
    //埋点数据
    let url = this.$api.reqTJ(this.$route.params.projectId, code);
    this.$get(url);
}