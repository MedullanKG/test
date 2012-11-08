var LoginModel = Backbone.Model.extend({
	
	defaults:{
		 username: null,
	     password: null
	},
	idAttribute: "username"
//	login:function(key, value, options)
//	{
//		      var attrs, current;
//
//		      if (_.isObject(key) || key == null) {
//		        attrs = key;
//		        options = value;
//		      } else {
//		        attrs = {};
//		        attrs[key] = value;
//		      }
//		      options = options ? _.clone(options) : {};
//
//		      if (options.wait) {
//		        if (!this._validate(attrs, options)) return false;
//		        current = _.clone(this.attributes);
//		      }
//
//		      var silentOptions = _.extend({}, options, {silent: true});
//		      if (attrs && !this.set(attrs, options.wait ? silentOptions : options)) {
//		        return false;
//		      }
//
//		      var model = this;
//		      var success = options.success;
//		      options.success = function(resp, status, xhr) {
//		        var serverAttrs = model.parse(resp, xhr);
//		        if (options.wait) {
//		          delete options.wait;
//		          serverAttrs = _.extend(attrs || {}, serverAttrs);
//		        }
//		        if (!model.set(serverAttrs, options)) return false;
//		        if (success) {
//		          success(model, resp);
//		        } else {
//		          model.trigger('sync', model, resp, options);
//		        }
//		      };
//		      options.error = Backbone.wrapError(options.error, model, options);
//		      var method = this.isNew() ? 'create' : 'update';
//		      var xhr = (this.sync || Backbone.sync).call(this, method, this, options);
//		      if (options.wait) this.set(current, silentOptions);
//		      return xhr;
//	}
});