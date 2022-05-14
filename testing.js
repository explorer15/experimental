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
          text: 'ist [THREE] zwischen [VOUR] und [FIVE]',
          arguments: {
            THREE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '50'
            },
            VOUR: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            FIVE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '100'
            }
          }
        },
        {
          opcode: 'hi',
          blockType: Scratch.BlockType.REPORTER,
          text: 'hallo?',
          arguments: {}
        },
        {
          opcode: 'Version',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Version',
          arguments: {}
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
    return 'what do you want?';
  }
   innerhalb(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    if (args.VOUR < args.FIVE)
    {
     return args.THREE >= args.VOUR && args.THREE <= args.FIVE;
    }
     else
    {
     return args.THREE <= args.VOUR && args.THREE >= args.FIVE;
    }
  }
  Version(args) {
    return 'Version 3.0';
  }
}
Scratch.extensions.register(new StrictEqualityExtension());
