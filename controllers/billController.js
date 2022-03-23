const Bill = require("../models/Bill");

exports.createBill = async (req, res) => {
    try {
        let factura;

        factura = new Bill(req.body)

        await factura.save();

        res.send(factura);

    } catch (error) {
        console.log(error)
        res.status(500).send('algo salió mal')
    }
}
exports.getBills = async (req, res) => {
    try {
        const facturas = await Bill.find();
        res.json(facturas)



    } catch (error) {
        console.log(error)
        res.status(500).send('algo salió mal')
    }
}
exports.updateBill = async (req, res) => {
    try {
        const { items, paid, totalIva, totalValue } = req.body;
        let bill = await Bill.findById(req.params.id)
        if (!bill) {
            res.status(404).json({ msg: 'no existe' })
        }

        bill.items = items;
        bill.paid = paid;
        bill.totalIva = totalIva;
        bill.totalValue = totalValue;

        bill = await Bill.findByIdAndUpdate({
            _id: req.params.id
        }, bill, { new: true })
        res.json(bill);

    } catch (error) {
        console.log(error)
        res.status(500).send('algo salió mal')
    }
}
exports.getBill = async (req, res) => {
    try {
        let bill = await Bill.findById(req.params.id)
        if (!bill) {
            res.status(404).json({ msg: 'no existe' })
        }

        res.json(bill);

    } catch (error) {
        console.log(error)
        res.status(500).send('algo salió mal')
    }
}
exports.deleteBill = async (req, res) => {
    try {
        let bill = await Bill.findById(req.params.id)
        if (!bill) {
            res.status(404).json({ msg: 'no existe' })
        }

        await Bill.findByIdAndRemove({_id: req.params.id})
        res.json({msg: "se eliminó"});

    } catch (error) {
        console.log(error)
        res.status(500).send('algo salió mal')
    }
}