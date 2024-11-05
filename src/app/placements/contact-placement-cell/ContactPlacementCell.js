import React from 'react'
import { Mail, Phone } from 'lucide-react'

const ContactPlacementCell = () => {
    return (
        <div className="px-2 rounded-xl text-black">
            <h1 className="text-4xl font-novaReg mb-8">Contact Information of Placement Cell</h1>
            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                    <h2 className="text-2xl font-novaReg">Dr. Rakesh Srivastava</h2>
                    <p className="font-novaReg">Dean - Training & Placement</p>
                    <div className="flex items-center space-x-3">
                        <Mail className="w-6 h-6" />
                        <a
                            href="mailto:tpo@akgec.ac.in"
                            className="cursor-pointer font-novaBold"
                            aria-label="Email to TPO"
                        >
                            tpo@akgec.ac.in
                        </a>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Phone className="w-6 h-6" />
                        <a
                            href="tel:+91-7290034978"
                            className="cursor-pointer font-novaBold"
                            aria-label="Call Dr. Rakesh Srivastava"
                        >
                            +91-7290034978
                        </a>
                    </div>
                </div>
                <div className="space-y-6">
                    <h2 className="text-2xl font-novaReg">Dr. Hemant Ahuja</h2>
                    <p className=" font-novaReg">Joint Director AKGU, Training and Placement Department</p>
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-3">
                            <Mail className="w-6 h-6" />
                            <a
                                href="mailto:info@akgec.ac.in"
                                className="cursor-pointer font-novaBold"
                                aria-label="Email AKGEU Placement"
                            >
                                info@akgec.ac.in
                            </a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Mail className="w-6 h-6" />
                            <a
                                href="mailto:tpo@akgec.ac.in"
                                className="cursor-pointer font-novaBold"
                                aria-label="Email to TPO"
                            >
                                tpo@akgec.ac.in
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Phone className="w-6 h-6" />
                        <a
                            href="tel:1800-200-0777"
                            className="cursor-pointer font-novaBold"
                            aria-label="Call Dr. Hemant Ahuja"
                        >
                            1800-200-0777
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPlacementCell