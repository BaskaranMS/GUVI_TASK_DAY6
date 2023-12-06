//person class
class Person {
    constructor(firstName, lastName, age, gender, address, phoneNumber, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.address = address;
      this.phoneNumber = phoneNumber;
      this.email = email;
      this.hobbies = [];
      this.friends = [];
    }
  
    // Method to add a hobby
    addHobby(hobby) {
      this.hobbies.push(hobby);
    }
  
    // Method to add a friend
    addFriend(friend) {
      this.friends.push(friend);
    }
  
    // Method to get full name
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    // Method to display details
    displayDetails() {
      console.log(`Name: ${this.getFullName()}`);
      console.log(`Age: ${this.age}`);
      console.log(`Gender: ${this.gender}`);
      console.log(`Address: ${this.address}`);
      console.log(`Phone Number: ${this.phoneNumber}`);
      console.log(`Email: ${this.email}`);
      console.log(`Hobbies: ${this.hobbies.join(', ')}`);
      console.log(`Friends: ${this.friends.map(friend => friend.getFullName()).join(', ')}`);
    }
  }

  // Create persons
  const person1 = new Person("John", "Doe", 30, "Male", "123 Main St", "555-1234", "john.doe@example.com");
  const person2 = new Person("Jane", "Smith", 25, "Female", "456 Oak St", "555-5678", "jane.smith@example.com");
  
  // Add hobbies
  person1.addHobby("Reading");
  person1.addHobby("Traveling");
  person2.addHobby("Painting");
  person2.addHobby("Hiking");
  
  // Add friends
  person1.addFriend(person2);
  person2.addFriend(person1);
  
  // Display details
  person1.displayDetails();
  console.log('\n----------------\n');
  person2.displayDetails();
  

//output
// Name: John Doe
// Age: 30
// Gender: Male
// Address: 123 Main St       
// Phone Number: 555-1234     
// Email: john.doe@example.com
// Hobbies: Reading, Traveling
// Friends: Jane Smith        

// ----------------

// Name: Jane Smith
// Age: 25
// Gender: Female
// Address: 456 Oak St
// Phone Number: 555-5678
// Email: jane.smith@example.com
// Hobbies: Painting, Hiking
// Friends: John Doe