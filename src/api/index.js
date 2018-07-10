/*
 * @Name: 模型浏览-接口路径
 * @Author: 李荣男
 * @Date: 2018年3月12日 16:56:57
 * @Last Modified by: 李荣男
 */
//基础路径
const baseUrl = '/api';
const apiVersion = "/v1"
const api = {
    //埋点
    reqTJ: (projectId, code) => `${baseUrl}/v1/projects/${projectId}/tj/${code}`,
    //获取当前用户id
    fetchCurrentUserId: (projectId) => `${baseUrl}/v1/projects/${projectId}/weeklyPlan/member/getCurrentUserId`,
};

export function url(name, _store, params = {}) {
    if (_store) {
        params.id = _store.state.projectId;
    }
    return baseUrl + apiVersion + api[name](params);
}
export default api;