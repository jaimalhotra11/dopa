import Class from '../models/Class.js';


const createClass = async (req, res) => {
  try {
    const { name, schedule, capacity, description } = req.body;
    
    const newClass = await Class.create({
      name,
      trainer: req.user._id,
      schedule,
      capacity,
      description
    });

    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getClasses = async (req, res) => {
  try {
    const classes = await Class.find({})
      .populate('trainer', 'name')
      .sort('schedule.day schedule.time');
    
    res.json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getClassById = async (req, res) => {
  try {
    const class_ = await Class.findById(req.params.id)
      .populate('trainer', 'name');
    
    if (class_) {
      res.json(class_);
    } else {
      res.status(404).json({ message: 'Class not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateClass = async (req, res) => {
  try {
    const class_ = await Class.findById(req.params.id);
    
    if (!class_) {
      res.status(404).json({ message: 'Class not found' });
      return;
    }

    if (class_.trainer.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      res.status(401).json({ message: 'Not authorized' });
      return;
    }

    const updatedClass = await Class.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    
    res.json(updatedClass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  createClass,
  getClasses,
  getClassById,
  updateClass
};