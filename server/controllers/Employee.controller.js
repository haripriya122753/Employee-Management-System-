import { Department } from '../models/Department.model.js';
import { Employee } from "../models/Employee.model.js";
import { organization } from '../models/Organization.model.js';

export const HandleAllEmployee = async (req, res) => {
    try {
        const employee = await Employee.find({
            organizationID: req.ORGID }).populate("department", "name").select("firstname lastname contactnumber department attendence notice salary leaverequest generaterequest isverified")
            return res.status(200).json({ success: true, data: employee, type: "AllEmployee" })
        } catch (error) {
            return res.status(500).json({ success: false,
                error: error, message: "Internal server error" })
        }
    }
    
