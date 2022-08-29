// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

 function handler(req, res) {
  if (req.method === 'post'){
  const data = req.body;
  const {title,image,adress,description}= data;
  
  }
  res.status(200).json({ name: 'John Doe' })
}

export default handler;

