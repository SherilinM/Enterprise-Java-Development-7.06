import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo/todo.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    message: string = "";

    greenColor: string = "";

    todoList: Todo[] = [
        new Todo("Play hard", false, false),
        new Todo("Work hard", false, false),
        new Todo("Play harder", false, false),
        new Todo("Get hidrated", false, false),
        new Todo("Sleep 8 hours xD", false, false),
    ];

    posposedList: Todo[] = [];

    constructor() { }

    ngOnInit(): void {
    }


    addToList(): void {
        if (this.message !== '') {
            this.todoList.push(new Todo(this.message, false, false));
            this.message = '';
        }
    }

    addToPosposedList(index: number): void {
        console.log(this.todoList[index].name, true, false);
        this.posposedList.push(new Todo(this.todoList[index].name, true, false));
    }

    deleteAll(): void {
        this.todoList = [];
    }

    enterAddElement(event: KeyboardEvent): void {
        if (event.key === "Enter") {
            if (this.message !== '') {
                this.addToList();
                this.message = '';
            }
        }
    }

    deleteElement(index: number): void {
        this.todoList.splice(index, 1);
    }

    completedTask(index: number): void {
        this.todoList[index].completed = true;
    }

    cleanCompleted(): void {
        for (let i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].completed === true) {
                this.todoList.splice(i, 1);
            }
        }
    }

    posposedTask(index: number): void {
        this.addToPosposedList(index);
        this.todoList.splice(index, 1);
    }
}