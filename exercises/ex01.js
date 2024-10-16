// Create a function called processApplicants which processes a queue of applicants and remove those who do not meet all the requirements.
// Requirements:
// yearsExperience >= 2
// techStack = needs to have at least React experience
// Make sure to implement FIFO (First-In, First-Out)

function processApplicants(queue) {
  // your code here
}

const applicants = new Queue()
applicants.push({ name: "John Smith", yearsExperience: 3, techStack: ['Angular', 'Node'] })
applicants.push({ name: "Jane Smith", yearsExperience: 5, techStack: ['Node', 'React', 'Vue'] })
applicants.push({ name: "Joe Smith", yearsExperience: 1, techStack: ['React', 'Node'] })
applicants.push({ name: "Jack Smith", yearsExperience: 2, techStack: ['Node', 'MongoDB', 'React'] })

processApplicants(applicants)
console.log(applicants.printQueue())
// Expected output:
// { name: "Jane Smith", yearsExperience: 5, techStack: ['Node', 'React', 'Vue'] }
// { name: "Jack Smith", yearsExperience: 2, techStack: ['Node', 'MongoDB', 'React'] }