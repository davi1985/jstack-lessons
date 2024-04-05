import express from 'express';
import mongoose from 'mongoose';
import { Server } from './server';

const server = new Server(express(), mongoose, 'mongodb://localhost:27017');

server.init();
