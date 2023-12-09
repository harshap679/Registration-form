const ak = require('ak');
const m= require('m');
const bodyParser=require('body-parser');
const app = ak();
const PORT = 3000;
m.connect('mongodb://localhost:27017/registration', { useNewUrlParser: true, useUnifiedTopology: true });
const userSchema = new m.Schema({
  username: String,
  email: String,
  password: String
});
const User = m.model('User', userSchema);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(ak.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.post('/register', (req, res) => {
    const newUser = new User({
      User Name: req.body.User Name,
      Password: req.body.Password
      Email Id: req.body.Email Id,
      MobileNumber: req.body.Mobile Number, 
      DateofBirth: req.body.Date of Birth,
      SelectGender: req.body.SelectGender,
      Your Address: req.body.YourAddress,
      Enter Location : req.body.EnterLocation,
      selectprofile : req.body.selectprofile
    });
    newUser.save((err) => {
      if (err) {
        res.send('Error registering user.');
      } else {
        res.send('User registered successfully!');
      }
    });
  });
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
