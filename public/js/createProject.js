const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const projectName = document.querySelector('#project-name').value;
    const projectFunding = document.querySelector('#project-funding').value;
    const projectDescription = document.querySelector('#project-description').value;
  
    if (projectName) {
      const response = await fetch('/projects/', {
        method: 'POST',
        body: JSON.stringify({ projectName, projectFunding, projectDescription }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  