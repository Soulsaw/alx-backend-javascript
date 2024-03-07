import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto()
    .then((value1) => {
      createUser()
        .then((value) => { console.log(`${value1.body} ${value.firstName} ${value.lastName}`); });
    });
}
