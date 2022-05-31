export default async function handler(req, res) {
  try {
    const data = await fetch(
      "https://api.github.com/gists/5e8846d20351f7d5ab004bc692b00262"
    ).then(res => res.json());
    const resume = data.files["resume.json"];
  
    res.statusCode = 200;
    res.json(JSON.parse(resume.content));
  }
  catch (err) {
    res.statusCode = 500;
    res.json({ message: err.message });
  }
}