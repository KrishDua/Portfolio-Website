import React from 'react'
import Skillcard from './Skillcard'

function SkillsSection() {
  return (
    <section id='skills' className='text-white mb-5 scroll-mt-32' >
    <div className="bg-[#0f172a] border border-cyan-500 
    rounded-2xl w-full mb-10 shadow-lg p-8 
    mx-auto transition-transform duration-300 
    hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
            My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-6 md:gap-8 p-4 sm:px-6 md:px-12">
            <Skillcard name="C" image="/C.png" />
            <Skillcard name="C++" image="/C++.svg" />
            <Skillcard name="Python" image="/Python.svg" />
            <Skillcard name="JavaScript" image="/JavaScript.png" />
            <Skillcard name="DSA" image="/dsa.jpg" />
            <Skillcard name="HTML" image="/html.svg" />
            <Skillcard name="CSS" image="/CSS.svg" />
            <Skillcard name="Node.js" image="/node.svg" />
            <Skillcard name="Express.js" image="/Express.jpg" />
            <Skillcard name="React" image="/React.svg" />
            {/* <Skillcard name="Next.js" image="/next.jpg" /> */}
            <Skillcard name="Git" image="/git.svg" />
            <Skillcard name="MongoDB" image="MongoDB.jpg" />
            <Skillcard name="SQL" image="/Sql.png" />
            <Skillcard name="Linear Regression" image="/linear.jpg" />
            <Skillcard name="Logistic Regression" image="/logisitic.jpg" />
            <Skillcard name="Gradient Descent" image="/gradient.jpg" />
            <Skillcard name="Decision Trees" image="/DT.png" />
            <Skillcard name="Random Forest" image="/random.jpg" />
            <Skillcard name="Naive Bayes" image="/naiveb.jpg" />
            <Skillcard name="KNN" image="/knn.jpg" />
            <Skillcard name="SVM" image="/svm.jpg" />
            <Skillcard name="PCA" image="/pca.jpg" />
            <Skillcard name="NLP" image="/nlp.jpg" />
            <Skillcard name="Neural Networks" image="/NN.svg" />
            <Skillcard name="TensorFlow" image="/Tensorflow.svg" />
            <Skillcard name="Keras" image="/Keras.svg" />
            <Skillcard name="CNN" image="/cnn.png" />
            <Skillcard name="RNN" image="/rnn.jpg" />
            <Skillcard name="LSTM" image="/lstm.jpg" />
            <Skillcard name="Clustering" image="/clustering.jpg" />            
            </div>
    </div> 
</section>
  )
}

export default SkillsSection