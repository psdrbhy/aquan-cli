#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();
import { input } from '@inquirer/prompts';
import chalk from 'chalk';
import ora from 'ora';
import select, { Separator } from '@inquirer/select';
import confirm from '@inquirer/confirm';
// var figlet = require("figlet");
import figlet from 'figlet'


// ------chalk-------命令行输出美化工具
// console.log(chalk.blue('Hello world!'));
//  console.log(chalk.white.bold.bgBlue("我会变成红色"))





// --------inquirer-----   用户交互式工具
// const answer = await input({ message: 'Enter your name' });



// const answer = await select({
//   message: 'Select a package manager',
//   choices: [
//     {
//       name: 'npm',
//       value: 'npm',
//       description: 'npm is the most popular package manager',
//     },
//     {
//       name: 'yarn',
//       value: 'yarn',
//       description: 'yarn is an awesome package manager',
//       },
//       {
//         name: 'axios',
//         value: 'axios',
//         description: 'axios is an awesome package manager',
//       },

// const answer = await confirm({ message: 'Do you want install axios' });
    // new Separator(),
    // {
    //   name: 'jspm',
    //   value: 'jspm',
    //   disabled: true,
    // },
    // {
    //   name: 'pnpm',
    //   value: 'pnpm',
    //   disabled: '(pnpm is not available)',
    // },
//   ],
// });


//---------ora--------:终端loading美化工具
// const spinner = ora('Loading waiting').start();

// setTimeout(() => {
// 	spinner.color = 'red';
// 	spinner.text = '网络较慢 请稍等....';
// }, 2000);

// setTimeout(() => {
// 	// spinner.succeed('下载成功！')
//     spinner.fail("下载失败")
// }, 4000);



// --------commander-------命令处理行工具
//  program.name("aquan-cli").usage('<command> [option]')  //给他设置usage后面内容
// program
//     .option('-v,--version')
//     .option('-s,--small','small pizza size')
//     .option('-d,--debug','output extra debugging')
//     .option('-p,--pizza-type <type>', 'flavour of pizza')

// //设置命令
// program
//   .command('clone <source> [destination]')   //命令名:资源和目的地
//   .description('clone a repository into a newly created directory')  //描述
//   .action((source, destination) => {                            //命令执行
//     console.log('clone command called');
//   });
// program.parse(process.argv) //进行解析

// const options = program.opts()
// console.log(options)


//--------figlet-----:美化艺术字



figlet("lq    love    lzq", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});