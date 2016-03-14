module.exports = {
  create: function(recipient) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      if (!_this.vendorToken) {
        return reject(new Error('VendorTokenRequired'));
      } else if (!recipient.first_name || !recipient.last_name || !recipient.mobile) {
       reject(new Error('MissingRequiredParameters'));
      }
      httpClient.post(_this.apiEndpoint + 'vendors/' + _this.vendorToken + 'recipients')
        .set('User-Agent', _this.userAgent)
        .send({'token': _this.token})
        .send(recipient)
        .end(function(err, res) {
          if (err) {
            return reject(err);
          }
          resolve(res.body);
        });
    });
  },//end create
  get: function(recipientId) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      if (!_this.vendorToken) {
        return reject(new Error('VendorTokenRequired'));
      } else if (!recipientId) {
       reject(new Error('MissingRequiredParameter'));
      }
      httpClient.get(_this.apiEndpoint + 'vendors/' + _this.vendorToken + 'recipients/' + recipientId)
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
  getAll: function() {
    var _this = this;
    return new Promise(function(resolve, reject) {
      if (!_this.vendorToken) {
        return reject(new Error('VendorTokenRequired'));
      }
      httpClient.get(_this.apiEndpoint + 'vendors/' + _this.vendorToken + 'recipients')
        .set('User-Agent', _this.userAgent)
        .query({token: _this.token})
        .end(function(err, res) {
          if (err) {
            return reject(err);
          }
          resolve(res.body);
        });
    });
  },//end getAll
  update: function(recipientId, recipient) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      if (!_this.vendorToken) {
        return reject(new Error('VendorTokenRequired'));
      } else if (!recipientId || !recipient.first_name || !recipient.last_name || !recipient.mobile) {
       reject(new Error('MissingRequiredParameters'));
      }
      httpClient.post(_this.apiEndpoint + 'vendors/' + _this.vendorToken + 'recipients/' + recipientId)
        .set('User-Agent', _this.userAgent)
        .send({'token': _this.token})
        .send(recipient)
        .end(function(err, res) {
          if (err) {
            return reject(err);
          }
          resolve(res.body);
        });
    });
  },//end update
  delete: function(recipientId) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      if (!_this.vendorToken) {
        return reject(new Error('VendorTokenRequired'));
      } else if (!recipientId) {
       reject(new Error('MissingRequiredParameter'));
      }
      httpClient.del(_this.apiEndpoint + 'vendors/' + _this.vendorToken + 'recipients' + '/' + recipientId)
        .set('User-Agent', _this.userAgent)
        .query({token: _this.token})
        .end(function(err, res) {
          if (err) {
            return reject(err);
          }
          resolve(res.body);
        });
    });
  }//end delete
}//end recipient