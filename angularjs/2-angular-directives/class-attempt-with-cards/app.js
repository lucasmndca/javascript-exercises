let app = angular.module('firstAngularApp', []);

app.controller('mainCtrl',
    class MainController {

        constructor() {
            this.currentObject = '';
            this.buttons = {
                add: 'Add',
                delete: 'Delete'
            }
            this.objects = [];
            this.id = 0;
            this.addType = 'fruit';
        }

        validateAndAdd() {
            if (this.currentObject === '') {
                alert('Please type something!');
                console.error(`A new error was thrown at ${new Date()} - No empty objects!`);
            } else {
                const formattedType = this.formatType();
                let obj = {
                    name: this.currentObject,
                    id: this.id,
                    type: formattedType
                }
                this.id++;
                this.addObj(obj);
            }
        }

        formatType() {
            return this.addType.charAt(0).toUpperCase() + this.addType.slice(1);
        }

        addObj(obj) {
            this.objects.push(obj);
        }

        deleteObj(targetObj) {
            this.objects.splice(this.objects.indexOf(targetObj), 1);
        }
    }

)