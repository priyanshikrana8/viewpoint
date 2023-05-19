
import data from './data'

// api/trending
export default function handler(req, res) {
    const { links } = data;
    if (links) return res.status(200).json(links)
    return res.status(404).json({ error: "Data Not Found" })
}