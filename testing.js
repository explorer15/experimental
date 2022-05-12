class StrictEqualityExtension {
  getInfo() {
    return {
      id: 'strictequalityexample', // change this if you make an actual extension!
      name: 'Genau gleich',
      blocks: [
        {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] ist genau wie [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'First value'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Second value'
            }
          }
        },
         {
          opcode: 'innerhalb',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[THREE] [VOUR] [FIVE]',
          arguments: {
            THREE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '0'
            },
            VOUR: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '50'
            },
            FIVE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '100'
            }
          }
        },
        {
          opcode: 'hi',
          blockType: Scratch.BlockType.REPORTER,
          text: 'hallo?',
          arguments: {
           }
        }
      ]
    };
  }
  strictlyEquals(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    return args.ONE == args.TWO;
  }
  hi(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    var kauderwelsch = 100;
    return 'what do you want?';
  }
   innerhalb(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    return args.THREE;
  }
}
Scratch.extensions.register(new StrictEqualityExtension());
