const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page using React and CSS.",
        taskDate: "2026-06-28",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve navigation bar alignment issues.",
        taskDate: "2026-06-25",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate login API with frontend.",
        taskDate: "2026-06-24",
        category: "Backend"
      }
    ]
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Develop employee dashboard UI.",
        taskDate: "2026-06-29",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Charts",
        taskDescription: "Display monthly performance using charts.",
        taskDate: "2026-06-30",
        category: "Analytics"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Sidebar Component",
        taskDescription: "Create reusable sidebar component.",
        taskDate: "2026-06-23",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Dark Mode",
        taskDescription: "Implement dark mode support.",
        taskDate: "2026-06-22",
        category: "UI/UX"
      }
    ]
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Schema",
        taskDescription: "Design MongoDB collections.",
        taskDate: "2026-06-28",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "JWT Authentication",
        taskDescription: "Implement JWT-based authentication.",
        taskDate: "2026-06-29",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Express Server",
        taskDescription: "Configure Express server and routes.",
        taskDate: "2026-06-21",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Email Verification",
        taskDescription: "Add email verification feature.",
        taskDate: "2026-06-20",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "API Testing",
        taskDescription: "Test REST APIs using Postman.",
        taskDate: "2026-06-19",
        category: "Testing"
      }
    ]
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Create unit tests for authentication module.",
        taskDate: "2026-06-28",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Bug Fixes",
        taskDescription: "Resolve reported UI bugs.",
        taskDate: "2026-06-29",
        category: "Maintenance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Queries",
        taskDescription: "Improve database query performance.",
        taskDate: "2026-06-24",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy Backend",
        taskDescription: "Deploy backend on Render.",
        taskDate: "2026-06-23",
        category: "Deployment"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Gateway",
        taskDescription: "Integrate payment gateway.",
        taskDate: "2026-06-22",
        category: "Backend"
      }
    ]
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Reports",
        taskDescription: "Generate employee performance reports.",
        taskDate: "2026-06-28",
        category: "Reports"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Export CSV",
        taskDescription: "Implement CSV export functionality.",
        taskDate: "2026-06-29",
        category: "Reports"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "User Profile",
        taskDescription: "Develop profile page for employees.",
        taskDate: "2026-06-25",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed:false,
        failed:true,
        taskTitle:"Notification System",
        taskDescription:"Implement real-time notifications.",
        taskDate:"2026-06-24",
        category:"Backend"
      },
      {
        active:false,
        newTask:false,
        completed:true,
        failed:false,
        taskTitle:"Responsive Design",
        taskDescription:"Make all pages mobile-friendly.",
        taskDate:"2026-06-23",
        category:"UI/UX"
      },
      {
        active:false,
        newTask:false,
        completed:true,
        failed:false,
        taskTitle:"Code Review",
        taskDescription:"Review teammates' pull requests.",
        taskDate:"2026-06-22",
        category:"Development"
      }
    ]
  }
];

const admin = [
  {
    id: 100,
    email: "admin@example.com",
    password: "123"
  }
];
export const  setLocalStorage=()=>{
    localStorage.setItem('employees',   JSON.stringify(employees))
    localStorage.setItem('admin',   JSON.stringify(admin))

}

export const  getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    
    return {employees, admin}
}