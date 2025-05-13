import GameModel from '../models/game.model.js';

class GameController {
    async findAll (req, res) {
        try {
            const games = await GameModel.findAll();

            return res.status(200).json(games);
        }catch (error) {
            console.error("Error finding all games", error)
            return res.status(500).json({ message: "Error finding all games", error });
        }
    }

    async create (req, res) {
        try {
            const {name, platform} = req.body;

            //validação basica
            if(!name || !platform) {
                return res.status(400).json({ message: "Name and plataform are required!" });
            }

            const data = {
                name,
                plataform: platform,
            };

            const newGame = await GameModel.create(data);

            return res.status(201).json({
                message: "New game successfully created!",
                newGame,
            })
        }catch (error) {
            console.error("Error creating new game", error);
             res.status(500).json({ error: "Error creating new game" });
        }
    }
}

export default new GameController();
