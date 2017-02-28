var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
//var DB = require('models/db.js');
//DB.createDB();
var mainLayout = new Backbone.Marionette.LayoutView({
    el: '#main',
    regions: {
        content: "#content"
    },
    template: require('./templates/layout.html'),

});

mainLayout.render();



//var panel = new PanelView();

//mainLayout.content.show(panel);



// var TodoList = Marionette.CollectionView.extend({
//     el: '#app-hook',
//     tagName: 'ul',
//
//     childView: ToDo
// });
//
// var todo = new TodoList({
//     collection: new Backbone.Collection([
//         {assignee: 'Scott', text: 'Write a book about Marionette'},
//         {assignee: 'Andrew', text: 'Do some coding'}
//     ])
// });
//
// todo.render();