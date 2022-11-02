import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Record, RecordDocument } from './schemas/record.schema';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';

@Injectable()
export class RecordsService {
  constructor(@InjectModel(Record.name) private recordModel: Model<RecordDocument>) {}

  async create(createRecordDto: CreateRecordDto): Promise<Record> {
    const createdRecord = new this.recordModel(createRecordDto);
    return createdRecord.save();
  }

  findAll(): Promise<Record[]> {
    return this.recordModel.find().exec();
  }

  findOne(id: string): Promise<Record> {
    return this.recordModel.findById(id).exec();
  }

  update(id: string, updateRecordDto: UpdateRecordDto) {
    return this.recordModel.findByIdAndUpdate(id, updateRecordDto);
  }

  remove(id: string) {
    return this.recordModel.findByIdAndRemove(id);
  }
}
