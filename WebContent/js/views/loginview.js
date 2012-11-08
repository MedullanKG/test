var LoginView = Backbone.View.extend({
	template:_.template(window.JST["login"]),
	events:{
			"form .btn":"loginFunction"
	},
	initialize:function()
	{
		_.bindAll(this,"loginFunction","loginSuccess","loginFailure","render");
		this.model.bind("change",this.render);
	},
	render:function()
	{
		this.$el.append(this.template(this.model.toJSON()));
	},
	loginFunction:function()
	{
		
	},
	loginSuccess:function()
	{
		
		
	},
	loginFailure:function()
	{
		
		
	}
});