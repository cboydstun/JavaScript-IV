// CODE here for your Lambda Classes

class Person {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.location = options.location;
        this.gender = options.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}. I am from ${this.location}.`;
    }
};

class Instructor extends Person {
    constructor(instructorOptions) {
        super(instructorOptions);
        this.specialty = instructorOptions.specialty;
        this.favLanguage = instructorOptions.favLanguage;
        this.catchPhrase = instructorOptions.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade (student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
    grading (student, max, min) { // This is the code I wrote for the stretch task that randomly adds/subtracts points
        max = 20;
        min = -20;
        return student.grade - Math.random() * (max-min) + max
    }
};

class Student extends Person {
    constructor (studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
    this.grade = Math.floor(Math.random() * 100) + 1 // This is the code I wrote for the stretch task that randomly assigned grades to students.
    }
    listsSubjects () {
        return this.favSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
    graduation () { // This is the code I wrote for the stretch task that graduates students.
        if (this.grade > 70 ) {
            return 'Congratulations on graduating from Lambda!'
        } else {
            return `Don't stop grinding!`
        }
}
};

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
    }
    standUp (channel) {
        return `${this.name} announces ${channel}!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
};

let chris = new Student ({
    'name': 'Chris Boydstun',
    'age': 33,
    'location': 'Austin, TX',
    'gender': 'Male',
    'previousBackground': 'Education',
    'className': 'WEB23',
    'favSubjects': ['HTML', 'CSS', 'JavaScript', 'Python']
});

let john = new Student ({
    'name': 'John Smith',
    'age': 54,
    'location': 'Nantucket, Massachussetts',
    'gender': 'Male',
    'previousBackground': 'Target',
    'className': 'WEB21',
    'favSubjects': ['PHP', 'SQL', 'jQuery']
});

let jack = new Student ({
    'name': 'Jack Longoria',
    'age': 19,
    'location': 'Tulsa, Oklhasoma',
    'gender': 'Male',
    'previousBackground': 'Unknown',
    'className': 'WEB24',
    'favSubjects': ['CSS', 'CSS', 'CSS']
});

let susan = new Instructor ({
    'name': 'Susan Sweet',
    'age': 22,
    'location': 'Pensacola, Florida',
    'gender': 'Male',
    'specialty': 'Web Design',
    'favLanguage': 'CSS',
    'catchphrase': 'It. Is. On.'
});

let jason = new Instructor ({
    'name': `Jason Vorheese`,
    'age': 81,
    'location': 'Crystal Lake, Michigan',
    'gender': 'Male',
    'specialty': 'Violent cinematography',
    'favLanguage': 'MySQL',
    'catchphrase': `QUIET.`
});

let jared = new Instructor ({
    'name': `Jared Leto`,
    'age': 34,
    'location': 'Phoenix, Arizona',
    'gender': 'Male',
    'specialty': 'Keyboarding',
    'favLanguage': 'Javascript',
    'catchphrase': `Awesome!`
});

let tom = new ProjectManager ({
    'name': 'Tom Cruise',
    'age': 55,
    'location': 'Hollywood, California',
    'gender': 'Male',
    'specialty': 'Grading.',
    'favLanguage': 'C#',
    'catchPhrase': 'We are almost there.',
    'gradClassName': 'WEB23',
    'favInstructor': 'Jared Leto',
});

let baron = new ProjectManager ({
    'name': 'Baron Greene',
    'age': 50,
    'location': 'Toronto, Canada',
    'gender': 'Male',
    'specialty': 'Mind mapping',
    'favLanguage': "English",
    'catchPhrase': `Time to chill.`,
    'gradClassName': 'WEB20',
    'favInstructor': 'Jennifer James',
});

let tandy = new ProjectManager ({
    'name': 'Tandy Dawson',
    'age': 19,
    'location': 'Austin, Texas',
    'gender': 'Female',
    'specialty': 'Troubleshooting',
    'favLanguage': 'node.js',
    'catchPhrase': `It's the last one!`,
    'gradClassName': 'Web19',
    'favInstructor': 'Jennifer James',
});

console.log(tandy.age);
console.log(tandy.favInstructor);
console.log(tandy.specialty);
console.log(tandy.standUp('WEB23-help'));
console.log(tandy.debugsCode(chris, 'CSS'));
console.log(chris.speak());