import Test from '../models/test.model';

export const getItems = async (req, res) => {
    const items = await Test.getItems();
    res.send(items);
};
