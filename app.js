/* const fs = require('fs');


fs.writeFileSync('notes.txt', 'My name is no Charles!')

fs.appendFile('not.txt', '\ndata to append', function(err){
   if (err) throw err;
   console.log('Saved!');
}); 

const name = "Andrew"

console.log(name) */

const chalk = require('chalk');

const validator = require('validator');

const yargs = require('yargs');

const notes = require('./notes.js');

/* const msg = getNotes()

console.log(msg)

console.log(validator.isEmail('andrew@example.com'))

console.log(chalk.yellow('success') + chalk.green(' World') + chalk.red('!')); 

const comand = process.argv[2]

const yarge = require('yargs');

console.log(process.argv)

if (command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
     console.log('Remove note!')
} */


//customize yargs version
yargs.version('1.1.0')

// create add comand 
yargs.command({
     command: 'add',
     describe: 'Add a new note',
     builder: {
        title: {
             describe: 'Note title',
             demandOption: true,
             type: 'string'

        },

        body: {
         content: 'lorem ispum',
         demandOption: true,
         type: 'string'

    }

        
     },
     handler(argv) {
       
      notes.addNote(argv.title, argv.body)
       
     }


})

// remove comand

yargs.command({
   command: 'remove',
   describe: 'Remove a note',
   builder: {
      title: {
           describe: 'Note title',
           demandOption: true,
           type: 'string'
        } 
      },

   handler(argv) {
      notes.removeNote(argv.title)
   }


})




// list comand

yargs.command({
   command: 'list',
   describe: 'list your notes',
   handler() {
       notes.listNotes()
   }


})



// read comand

yargs.command({
   command: 'read',
   describe: 'take a look at the list',
   builder: {
      title: {
           describe: 'no title',
           demandOption: true,
           type: 'string'
        } 
      },
   handler(argv) {
      notes.readNotes(argv.title)
   }


})



yargs.parse();