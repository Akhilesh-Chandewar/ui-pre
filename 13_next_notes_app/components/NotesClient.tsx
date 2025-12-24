'use client';

import { useState, useEffect } from 'react';

interface Note {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

function NotesClient() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingNotes, setIsLoadingNotes] = useState(true);
  const [message, setMessage] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch('/api/notes');
      const data = await response.json();

      if (response.ok) {
        setNotes(data.notes);
      } else {
        setMessage('Failed to fetch notes');
      }
    } catch (error) {
      console.error('Error fetching notes:', error);
      setMessage('An error occurred while fetching notes');
    } finally {
      setIsLoadingNotes(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setMessage('Please fill in both title and content');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title.trim(),
          content: content.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Note created successfully!');
        setTitle('');
        setContent('');
        fetchNotes();
      } else {
        setMessage(data.error || 'Failed to create note');
      }
    } catch (error) {
      console.error('Error creating note:', error);
      setMessage('An error occurred while creating the note');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (note: Note) => {
    setEditingId(note._id);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  const handleUpdate = async (id: string) => {
    if (!editTitle.trim() || !editContent.trim()) {
      setMessage('Please fill in both title and content');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: editTitle.trim(),
          content: editContent.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Note updated successfully!');
        setEditingId(null);
        setEditTitle('');
        setEditContent('');
        fetchNotes();
      } else {
        setMessage(data.error || 'Failed to update note');
      }
    } catch (error) {
      console.error('Error updating note:', error);
      setMessage('An error occurred while updating the note');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this note?')) return;

    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch(`/api/notes/${id}`, { method: 'DELETE' });
      const data = await response.json();

      if (response.ok) {
        setMessage('Note deleted successfully!');
        fetchNotes();
      } else {
        setMessage(data.error || 'Failed to delete note');
      }
    } catch (error) {
      console.error('Error deleting note:', error);
      setMessage('An error occurred while deleting the note');
    } finally {
      setIsLoading(false);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle('');
    setEditContent('');
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-10 text-center text-slate-900">
          Notes App
        </h1>

        {/* Create Note Form */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-slate-900">
            Create New Note
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={isLoading}
                placeholder="Enter note title"
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2
                text-slate-900 placeholder-slate-400
                focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                disabled:bg-slate-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={4}
                disabled={isLoading}
                placeholder="Enter note content"
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2
                text-slate-900 placeholder-slate-400
                focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                disabled:bg-slate-100"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white
              hover:bg-blue-700 focus:ring-2 focus:ring-blue-500
              disabled:opacity-50"
            >
              {isLoading ? 'Creating Note...' : 'Create Note'}
            </button>
          </form>
        </div>

        {/* Notes List */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-6 text-slate-900">
            Your Notes
          </h2>

          {isLoadingNotes ? (
            <div className="text-center py-8 text-slate-500">
              Loading notes...
            </div>
          ) : notes.length === 0 ? (
            <div className="text-center py-8 text-slate-400">
              No notes yet. Create your first note above!
            </div>
          ) : (
            <div className="space-y-4">
              {notes.map((note) => (
                <div
                  key={note._id}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  {editingId === note._id ? (
                    <div className="space-y-3">
                      <input
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        disabled={isLoading}
                        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2
                        text-slate-900 focus:ring-2 focus:ring-blue-500"
                      />
                      <textarea
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        rows={3}
                        disabled={isLoading}
                        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2
                        text-slate-900 focus:ring-2 focus:ring-blue-500"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleUpdate(note._id)}
                          disabled={isLoading}
                          className="rounded-md bg-green-600 px-4 py-2 text-white font-semibold hover:bg-green-700"
                        >
                          Update
                        </button>
                        <button
                          onClick={cancelEdit}
                          disabled={isLoading}
                          className="rounded-md bg-slate-200 px-4 py-2 text-slate-800 hover:bg-slate-300"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-slate-900">
                          {note.title}
                        </h3>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(note)}
                            className="text-sm font-medium text-blue-600 hover:text-blue-800"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(note._id)}
                            className="text-sm font-medium text-red-600 hover:text-red-800"
                          >
                            Delete
                          </button>
                        </div>
                      </div>

                      <p className="text-slate-700 whitespace-pre-wrap leading-relaxed">
                        {note.content}
                      </p>

                      <div className="mt-3 text-xs text-slate-500">
                        Created: {new Date(note.createdAt).toLocaleDateString()}
                        {note.updatedAt !== note.createdAt && (
                          <span className="ml-4">
                            Updated:{' '}
                            {new Date(note.updatedAt).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {message && (
          <div
            className={`mt-6 rounded-md px-4 py-3 text-sm font-medium ${message.includes('successfully')
                ? 'bg-green-100 text-green-800 border border-green-200'
                : 'bg-red-100 text-red-800 border border-red-200'
              }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default NotesClient;
