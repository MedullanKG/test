var DefaultRouter = Backbone.Router.extend({
	
	routes:{
		"":"loginPage",
		"index":"loginPage"
	},
	initialize:function()
	{
		this.loginModel = new LoginModel();
		this.loginView = new LoginView({model:this.loginModel});
	},
	loginPage:function(){
		$("#login-container").append(this.loginView.el);
	}
});