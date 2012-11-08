var DefaultRouter = Backbone.Router({
	
	routes:{
		"":"loginPage",
		"index":"loginPage"
	},
	initalize:function()
	{
		this.loginModel = new LoginModel();
		this.loginView = new LoginView({model:this.loginModel});
	},
	loginPage:function(){
		$("#login-container").append(this.loginView.el);
	}
});