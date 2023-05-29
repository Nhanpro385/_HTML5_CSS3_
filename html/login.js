 
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      
        event.preventDefault();
        
        validateForm();
      });
  
      function validateForm() {
       
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
  
        
        if (username.trim() === '') {
          document.getElementById('username').classList.add('is-invalid');
        } else {
          document.getElementById('username').classList.remove('is-invalid');
        }
  
        if (password.trim() === '') {
          document.getElementById('password').classList.add('is-invalid');
        } else {
          document.getElementById('password').classList.remove('is-invalid');
        }
  
        
        if (username.trim() !== '' && password.trim() !== '') {
         
          alert('Đăng nhập thành công!');
        }
      }