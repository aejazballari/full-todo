
let todo = [
    {
        id: 1,
        text: 'hello',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'there',
        isCompleted: false,
    },
    {
        id: 3,
        text: 'aejaz',
        isCompleted: false,
    },
]

export const getTodo = (req, res) => {
    res.status(200).json({
        success: true,
        error: null,
        data: todo
    })
}

export const postTodo = (req, res) => {
    let text = req.body.text;
    console.log(req.body);
    if(!text) {
        return res.status(400).json({
            success: false,
            error: 'todo is empty',
            data: {}
        })
    }
    const newTodo = {id: todo.length +1, text, isCompleted: false}
    todo = [...todo, newTodo]
    return res.status(201).json({
        success: true,
        error: null,
        data: todo
    })
}

export const postDelete = (req, res) => {
    let id = req.params.id
    if(!id) {
        return res.status(400).json({
            success: false,
            error: 'id is undefined or null',
            data: {}
        })
    }
    const index = todo.findIndex((item) => item.id === parseInt(id))
    console.log(todo.splice(index,1));
    return res.status(200).json({
        success: true,
        error: null,
        data: todo.splice(index,1)
    })
}

export const postPatch = (req, res) => {
    let id = req.params.id
    let body = req.body
    if(!id) {
        return res.status(400).json({
            success: false,
            error: 'id is undefined or null',
            data: {...body}
        })
    }
    const index = todo.findIndex((item) => item.id === parseInt(id))
    // console.log(updated);
    return res.status(200).json({
        success: true,
        error: null,
        data: body
    })
}