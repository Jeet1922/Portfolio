"use client"

import type React from "react"

import { useState } from "react"
import { portfolioData } from "@/lib/portfolio-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Instagram, ExternalLink, Download, Mail, MapPin, Calendar, Clock, Heart } from "lucide-react"

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <img
              src={portfolioData.personal.profileImage || "/placeholder.svg"}
              alt={portfolioData.personal.name}
              className="w-48 h-48 rounded-full mx-auto mb-8 shadow-2xl border-4 border-white object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm {portfolioData.personal.name} — a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-500 to-pink-500">
              {portfolioData.personal.title}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {portfolioData.personal.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-coral-500 to-pink-500 hover:from-coral-600 hover:to-pink-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-gray-700 border-2 border-gray-200 hover:border-coral-300 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Social Snapshot Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">Connect With Me</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50">
              <Instagram className="h-12 w-12 mx-auto mb-4 text-pink-500" />
              <h3 className="font-semibold text-lg mb-2">Instagram</h3>
              <p className="text-gray-600 mb-2">{portfolioData.social.instagram.handle}</p>
              <p className="text-sm text-gray-500">{portfolioData.social.instagram.followers} followers</p>
            </Card>

            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-slate-50">
              <Github className="h-12 w-12 mx-auto mb-4 text-gray-700" />
              <h3 className="font-semibold text-lg mb-2">GitHub</h3>
              <p className="text-gray-600">{portfolioData.social.github.handle}</p>
            </Card>

            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <Linkedin className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
              <p className="text-gray-600">{portfolioData.social.linkedin.handle}</p>
            </Card>
          </div>

          <div className="text-center">
            <Card className="inline-block p-6 shadow-lg bg-gradient-to-r from-orange-50 to-rose-50 border-0">
              <p className="text-gray-600 mb-2">Latest Instagram Post</p>
              <div className="w-64 h-64 bg-gradient-to-br from-orange-200 to-pink-200 rounded-lg mx-auto flex items-center justify-center">
                <p className="text-gray-500">Recent Travel Photo</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Who I Am Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">Who I Am</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">{portfolioData.about.story}</p>

              <div className="space-y-3">
                <h3 className="font-semibold text-xl text-gray-900 mb-4">Daily Rituals</h3>
                {portfolioData.about.dailyRoutines.map((routine, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-coral-400 rounded-full"></div>
                    <p className="text-gray-600">{routine}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 shadow-xl bg-gradient-to-br from-amber-50 to-orange-50 border-0">
              <div className="text-center">
                <Heart className="h-12 w-12 mx-auto mb-6 text-coral-500" />
                <blockquote className="text-lg italic text-gray-700 leading-relaxed">
                  "{portfolioData.personal.quote}"
                </blockquote>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">Experience & Journey</h2>

          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <Card
                key={index}
                className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-coral-400 bg-white"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-coral-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{exp.duration}</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-coral-100 text-coral-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" className="bg-white text-gray-700">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="bg-white text-gray-700">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">Skills & Tools</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.core.map((skill, index) => (
                  <Badge key={index} className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.tools.map((tool, index) => (
                  <Badge key={index} className="bg-green-100 text-green-700 hover:bg-green-200">
                    {tool}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-purple-50 to-pink-50">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Creative Skills</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.creative.map((skill, index) => (
                  <Badge key={index} className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">Beyond Code</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.hobbies.map((hobby, index) => (
              <Card
                key={index}
                className="p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-gradient-to-br hover:from-orange-50 hover:to-pink-50"
              >
                <div className="text-4xl mb-4">{hobby.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{hobby.title}</h3>
                <p className="text-gray-600 text-sm">{hobby.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">Thoughts & Reflections</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.blog.map((post, index) => (
              <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                    <Clock className="h-4 w-4 ml-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white text-coral-600 border-coral-200 hover:bg-coral-50"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">Let's Connect</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Get In Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always excited to connect with fellow creators, potential collaborators, or anyone who shares a
                passion for meaningful technology. Let's build something beautiful together.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-coral-500" />
                  <span className="text-gray-600">{portfolioData.personal.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-coral-500" />
                  <span className="text-gray-600">surajit@example.com</span>
                </div>
              </div>

              <div className="mt-8">
                <Button className="bg-gradient-to-r from-coral-500 to-pink-500 hover:from-coral-600 hover:to-pink-600 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>

            <Card className="p-6 shadow-xl border-0 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-gray-200 focus:border-coral-400 focus:ring-coral-400"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-gray-200 focus:border-coral-400 focus:ring-coral-400"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="border-gray-200 focus:border-coral-400 focus:ring-coral-400"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-coral-500 to-pink-500 hover:from-coral-600 hover:to-pink-600 text-white"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a href={portfolioData.social.github.url} className="hover:text-coral-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href={portfolioData.social.linkedin.url} className="hover:text-coral-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href={portfolioData.social.instagram.url} className="hover:text-coral-400 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-400">© 2024 {portfolioData.personal.name}. Built with ❤️ and lots of ☕</p>
        </div>
      </footer>
    </div>
  )
}
