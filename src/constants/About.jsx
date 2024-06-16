import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion"

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl"
            >
                About
                <span className="text-neutral-500"> Me</span>
            </motion.h1>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                >
                    <div className="text-center px-20 py-20">
                        <p className="my-2 py-6">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
        </div>
    )
}

export default About
