import http from "../http-common";

class TeamDataService {
  async getTeams() {
    const res = await http.get("/teams");
    const data = res.data;
 
    return data;
  }

  get(id) {
    return http.get(`/teams/${id}`);
  }

  create(data) {
    return http.post("/teams", data)
    .then(function(response){
      
    })
    .catch(function(err) {
      
    });
  }

  update(id, data) {
    return http.put(`/teams/${id}`, data)
    .then(function(response){
     
    })
    .catch(function(err) {
      
    });
  }

  delete(id) {
    return http.delete(`/teams/${id}`);
  }

  deleteAll() {
    return http.delete(`/teams`);
  }

  findByTitle(title) {
    return http.get(`/teams?title=${title}`);
  }
}

export default new TeamDataService();