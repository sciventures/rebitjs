module.exports = {
  create: function(recipientId, remittance) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      if (!recipientId || !remittance.amount || !remittance.currency || !remittance.strategy || !remittance.remittance_details/*TODO: is this really req if its props are all optional?*/) {
       reject(new Error('MissingRequiredParameters'));
      }
      httpClient.post(_this.apiEndpoint + 'remittances')
        .set('User-Agent', _this.userAgent)
        .send({'token': _this.token})
        .send(remittance)
        .end(function(err, res) {
          if (err) {
            return reject(err);
          }
          resolve(res.body);
        });
      });
  },//end create
  get: function(remittanceId) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      if (!recipientId) {
       reject(new Error('MissingRequiredParameter'));
      }
      httpClient.get(_this.apiEndpoint + 'remittances' + '/' + remittanceId)
        .set('User-Agent', _this.userAgent)
        .query({token: _this.token})
        .end(function(err, res) {
          if (err) {
            return reject(err);
          }
          resolve(res.body);
        });
      });
  },//end get
  delete: function(remittanceId) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      if (!remittanceId) {
       reject(new Error('MissingRequiredParameter'));
      }
      httpClient.del(_this.apiEndpoint + 'remittances' + '/' + remittanceId)
        .set('User-Agent', _this.userAgent)
        .query({token: _this.token})
        .end(function(err, res) {
          if (err) {
            return reject(err);
          }
          resolve(res.body);
        });
      });
  },//end delete
  calculate: function(remittance) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      if (!recipientId || !remittance.amount || !remittance.currency || !remittance.strategy || !remittance.remittance_details/*?is this really req if its props are all optional?*/) {
       reject(new Error('MissingRequiredParameters'));
      }
      httpClient.post(_this.apiEndpoint + 'remittances/calculate')
        .set('User-Agent', _this.userAgent)
        .send({'token': _this.token})
        .send(remittance)
        .end(function(err, res) {
          if (err) {
            return reject(err);
          }
          resolve(res.body);
        });
      });
  },//end calculate
}//end remittance