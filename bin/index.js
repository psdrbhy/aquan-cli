#!/usr/bin/env node
import { program } from 'commander'
import chalk from 'chalk';
import confirm from '@inquirer/confirm';
import inquirer from 'inquirer';
import fs from 'fs-extra'
import path from 'path'
import getClone from 'git-clone'
import ora from 'ora';


// 模板下载
const projectList = {
    'vue': 'git@github.com:kfc-vme50/vue-template.git',
    'react': 'git@github.com:kfc-vme50/react-template.git',
    'react&Ts': 'git@github.com:kfc-vme50/react-template-ts.git',
    'vue&Ts': 'git@github.com:kfc-vme50/vue-template-ts.git',
}

// 首行提示
program.name('aquan-cli').usage('<command> [option]')

// 版本号:这里有点问题:esm不可以用require,import不能导入json文件
// program.version(`v${require('../package.json').version}`)  

// 命令
program
    .command('create <app-name>')
    .description('创建一个新的项目')
    .action(async (name, destination) => {
        // 创建项目的逻辑
        // 创建一个名字为name的文件夹，把我们模板项目的代码都放到这个文件夹下面
        // 1.先判断当前目录下有没有name这个文件夹
        const targetPath = path.join(process.cwd(), name)
        if (fs.existsSync(targetPath)) {   //join进行拼接
            // 存在
            const answer = await confirm({ message: '该目录下已有该文件夹,是否要覆盖之前的文件夹' });
            // 是就覆盖
            if (answer) {
                fs.remove(targetPath)
                console.log("删除成功")
            } else {  //否就返回去起一个新的名字
                return;
            }
        } else {
            // 不存在
            // 先问用户需要哪种模板
            const answer = await inquirer.prompt([
                {
                    type: 'list',
                    message: 'select a framework',
                    name: 'type',
                    choices: [
                        {
                            name: 'Vue',
                            value: 'vue'
                        },
                        {
                            name: 'react',
                            value: 'react'
                        }
                    ]
                },
                {
                    type: 'list',
                    message: '是否要使用TS?',
                    name: 'Ts',
                    choices: [
                        {
                            name: '是',
                            value: true
                        },
                        {
                            name: '否',
                            value: false
                        }
                    ]
                }
            ])
            const key = `${answer.type}${answer.Ts ? '&Ts' : ' '}`
            const spinner = ora('Loading waiting').start();
            getClone(projectList[key], name, { checkout: 'main' }, function (err) {
                if (err) {
                    spinner.fail("下载失败")
                } else {
                    spinner.succeed('下载成功！')
                    fs.remove(path.join(targetPath,'.git'))
                    console.log('Done, now run:')
                    console.log(chalk.green(`\n cd ${name}`))
                    console.log(chalk.green(' npm install'))
                    console.log(chalk.green(' npm run dev \n'))

                }
            })
        }

    })
// 给help一个提示
program.on('--help', function () {
    // figlet("Hello World!!", function (err, data) {
    //     if (err) {
    //       console.log("Something went wrong...");
    //       console.dir(err);
    //       return;
    //     }
    //     console.log(data);
    //   });
    console.log("it can help you")
})
program.parse(process.argv)


