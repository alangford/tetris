const scribble = require('scribbletune');
let kick, bass, clip

// 4 by 4 kick
kick = scribble.clip({
	notes: ['c2'],
	pattern: 'x---'.repeat(4)
});
scribble.midi(kick, 'kick.mid');

// A simple bass line
bass = scribble.clip({
	notes: scribble.scale('a', 'minor', 2).slice(0, 3),
	pattern: '--x-'.repeat(4),
	shuffle: true
});
scribble.midi(bass, 'bass.mid');

clip = scribble.clip({
    notes: 'e4 C#m a4 e4 C#m a4 e4 G#m b4 a4',
    pattern: 'xxxxx-x-'.repeat(8),
    sizzle: true
});  

scribble.midi(clip, 'chords.mid');