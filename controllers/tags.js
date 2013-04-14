var TagsController = Composer.Controller.extend({
	elements: {
	},

	events: {
	},

	init: function()
	{
		this.project	=	this.profile.get_current_project();
		if(!this.project) return false;
		this.render();
	},

	render: function()
	{
		var content = Template.render('tags/list', {
			tags: this.project.get('tags').toJSON()
		});
		this.html(content);
	}
});
