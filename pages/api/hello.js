// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    //json data for prisoner
    prisoner: {
      firstName: "John",
      lastName: "Doe",
      inmateNumber: "123456",
      location: "San Quentin",
      unit: "A",
      cell: "1",
      dateOfBirth: "01/01/1990",
      name: 'John Doe',
      age: 30,
   }})
}
