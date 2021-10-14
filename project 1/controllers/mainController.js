//Display index
exports.index = (req, res)=> {
    res.render('./index')
}

//Display about
exports.about = (req, res)=> {
    res.render('./about');
}

//Display contact
exports.contact = (req, res)=> {
    res.render('./contact');
}