import http from "../http-common";

class MatchDataService {
  async getMatches() {
    const res = await http.get("/matches");
    const data = res.data;
  
    return data;
  }

  get(id) {
    return http.get(`/matches/${id}`);
  }

  create(data) {
  
    return http.post("/matches", data)
    .then(function(response){
      
    })
    .catch(function(err) {
     console.log(err)
    });
  }

  update(id, data) {
    return http.put(`/matches/${id}`, data);
  }

  delete(id) {
    return http.delete(`/matches/${id}`);
  }

  deleteAll() {
    return http.delete(`/matches`);
  }

  findByTitle(title) {
    return http.get(`/matches?title=${title}`);
  }
}

export default new MatchDataService();