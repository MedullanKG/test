var LoginView = Backbone.View.extend({
	template:_.template(window.JST["login"]),
//	events:{
//			"click form .btn":"loginFunction"
//	},
	initialize:function()
	{
		_.bindAll(this,"loginFunction","loginSuccess","loginFailure","render");
		this.model.bind("change",this.render);
	},
	render:function()
	{
		this.$el.append(this.template());
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