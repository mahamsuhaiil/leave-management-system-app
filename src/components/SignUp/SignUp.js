
import { required , email } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'


export default {
  name:'SignUp',
  setup () {
    return { 
      v$: useVuelidate() 
    }
  },

  validations(){
      return {
        email: { 
          required,
          email
        },
        password: { required },
      }
  },
  data(){
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  },
  
  methods:{   
    submit(){
      const request = {
        method: 'POST',
        headers: {
            "Content-Type": "text/plain"
        },
        body: JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password})
      }
      this.clear();
      fetch('http://localhost:8081/register',request)
      .then((response) => {
        if(response.status == 200){
          return alert('Register Successfully');
        }
        else{
          return alert('Something went wrong');
        }
      });

    },
    clear(){
      this.firstName = '',
      this.lastName = '',
      this.email = '',
      this.password = ''
    }
  },
}