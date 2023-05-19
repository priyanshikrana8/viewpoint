
import data from './data'

// api/popular
export default function handler(req, res) {
    const { ReadBout } = data;

    if (ReadBout) return res.status(200).json(ReadBout);
    return res.status(404).json({ error: "Data Not Found" })
}