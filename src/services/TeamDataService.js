import http from "../http-common";

class TeamDataService {
  async getTeams() {
    const res = await http.get("/teams");
    const data = res.data;
    console.log(data);
    return data;
  }

  get(id) {
    return http.get(`/teams/${id}`);
  }

  create(data) {
    return http.post("/teams", data)
    .then(function(response){
      console.log(response);
    })
    .catch(function(err) {
      console.log(err)
    });
  }

  update(id, data) {
    return http.put(`/teams/${id}`, data);
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