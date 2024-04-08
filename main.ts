#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todoList: string [] = [];
let condition = true;

                              //Print Welcome Message
console.log(chalk.magenta.italic(`\n\t Welcome to \ Fatima Nazeer's \ - Todo-List-Project`));

let main = async () => {
    while(condition){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.green("Select an option you want to do: "),
                choices: ["Add Task", "Delete Task", "Update Task", "View TODO-List", "Exit"]
            }
        ]);

        if(option.choice === "Add Task"){
            await addTask();
        }
        else if (option.choice === "Delete Task"){
            await deleteTask();
        }
        else if (option.choice === "Update Task"){
            await updateTask();
        }
        else if (option.choice === "View TODO-List"){
            await viewTask();
        }
        else if (option.choice === "Exit"){
            condition = false;

        }
    }
}

                //Function to add New Task to the List
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.yellowBright("Enter your New Task: "), 
        }
    ]);
    todoList.push(newTask.task);
    console.log(chalk.blueBright (`\n "${newTask.task}", sucessfully  added in your TODO-List`));
}
              //Function to view all TODO-List-Tasks
let viewTask = () => {
    console.log("\n Your TODO-List: \n");
    todoList.forEach((task , index) => {
        console.log(chalk.cyan(`${index}: ${task}`))
    }

    )
}
                      //Function to delete a task from List:
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.redBright("Enter the 'index.no' of the task that you want to delete: "), 
        }
    ]);

    let deletedTask = todoList.splice(taskIndex.index, 1);
    console.log(`\n ${deletedTask} This task has been deleted sucessfully from your TODO-List.`)
}
                             //Function to update a Task:
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.magentaBright("Enter the 'index.no' of the task that you want to update: "), 
        },
        {
            name: "new_task",
            type: "input",
            message: chalk.blue("Now, Enter new Task:")
    
        }
    ]);

    todoList[update_task_index.index] = update_task_index.new_task;
    console.log( chalk.bgGreenBright.bold(`\tTask at index.no ${update_task_index.index} updated sucessfully [for updated list Check option: view TODO-List]`));

}
main();